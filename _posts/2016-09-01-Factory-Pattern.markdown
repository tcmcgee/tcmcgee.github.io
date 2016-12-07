---                          
title: Factory Pattern
layout: post         
date: 2016-09-01 09:00                         
tag:                             
- blog                        
- Programming Patterns
- 8th Light
blog: true                            
---

# The Factory Pattern

Design patterns help to simplify and abstract your code. The challenge comes in knowing the correct pattern for the job.
In any code base it's important not to add extraneous design patterns, since a lot of patterns come along with a foundation that requires a fair amount of boilerplate code. This makes it crucial to know the exact circumstances when a specific pattern is appropriate.

 One of the most common patterns in object orientated programming is the factory pattern. The factory pattern involves completely separating the creation of an object from things that depend on it. One must be careful before introducing it as there's definitely a right and wrong time to use this pattern. I will walk you through some examples of the different ways the factory pattern appears in the wild, times it's used well and incorrectly, and touch on situations where you should think about bringing the pattern into your projects.

## What?

![IMAGE OF FACTORY](http://www.tomcmcgee.me/assets/images/factory.jpg)

At the highest level, a basic factory pattern functions similarly to an actual factory. The raw materials, or parameters, are given to the factory and the finished good, a constructed object, are returned. With a more pragmatic focus, a factory pattern takes parameters and returns an object that satisfies an interface. Usually the factory is named after the interface it satisfies; for example, a factory that produces objects that implement `Animal` would be called an `AnimalFactory`. Here is some quick context on the simplest scenario where you might want to use a Factory, as well as the actual factory's implementation:

~~~~ java

public interface Animal {
  void makeNoise();
}

public class Dog implements Animal{

  @Override
  public void makeNoise() {
    System.out.println("WOOF!");
  }
}

public class Cat implements Animal{

  @Override
  public void makeNoise() {
    System.out.println("Meow.");
  }
}

public class Fish implements Animal{

  @Override
  public void makeNoise() {
    System.out.println("Glub, Glub.");
  }
}

public class AnimalFactory {

  public Animal getAnimalOfType(animalType String) {
    switch (animalType.toLowerCase()) {
      case "dog": return new Dog(); break;
      case "cat": return new Cat(); break;
      case "fish": return new Fish(); break;
      default: return null; break;
    }
  }

}
~~~~

In this example we are creating an interface, `Animal` and implementing it three times - once each for `Dog`, `Cat`, and `Fish`. For each animal, a string of its `animalType` is passed into the `getAnimalOfType()` method of `AnimalFactory`, returning the corresponding `Animal`.

## When?

With the example above, it's immediately apparent that there are a lot of different kinds of Animals. Assuming your adhering to the [Liskov substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle), each of these animals should be interchangeable in your program. If that's true and the type of object, in this case an animal, that you're going to want depends on some variable user input, like a survey asking if the user is a cat/dog/fish person, then the factory pattern is an awesome fit. No matter what type of animal the user selects, the code depends on the abstraction of an animal so it doesn't matter exactly what kind of animal the factory spits out.

Now if you decide to switch to a factory and notice code similar to the following example, you may need to rethink the introduction of the pattern.

~~~~ java
public void makeHappy(animal Animal) {
  if (animal instanceOf Fish) {
    giveFishFood(animal);
  } else if (animal instanceOf Cat) {
    giveMouse(animal);
  } else if (animal instanceOf Dog) {
    giveBellyRub(animal);
  } else {
    patOnHead(animal);
  }
}

~~~~

In the above example there's a different behavior for each kind of Animal so they're forced to deconstruct the Animal to the exact sub-type. This hints that your interface could use a little refactoring, you're creating abstractions along the wrong seams, or potentially that this pattern isn't a good fit in your project. Factories are best utilized when the behavior remains the same through all sub-types of the abstraction.


One of the most frequent occurrences of factories I see is in a simple implementation of tic-tac-toe. The user wants to allow for several types of players: human, easy computers, and hard computers. However, the exact type of computer being created depends on the user's input. A `PlayerFactory` is appropriate here because once the players are created, they each satisfy the `Player` interface, which contains `getMove()`. The use of a factory in this scenario allows a player to create a game containing any combination of players they want, while also removing that messy series of `if`/`else` statements that would otherwise create the appropriate player from the main, where they could seriously cloud what's going on.

The factory pattern can definitely be a powerful tool when used in the correct circumstances. It's true power comes after you verify that it's practical in your design. In review of some of the key points before using this pattern:

* You're using a class based programming language.
* Your code depends on abstractions (the Animal or Player interface in the examples).
* There's enough variety in the number of classes, or when each one should be used.
* You don't need to do specific type checking down the line (the `makeHappy` example), as that pretty much defeats the purpose of this pattern.

## Why?

A class should not know how one of its dependencies is created. The factory pattern separates that knowledge into it's own class and allows a simple call `PlayerFactory.getPlayer("Computer")`, to dynamically generate exactly what you need, when you need it. Reflect on the following example of creating a game before the factory pattern is introduced:

~~~~ java
public Game createGame(ui UI) {
  int player1SelectionType = ui.getSelectedPlayerType();
  Player player1;
  if (player1SelectionType == 0) {
    player1 = new HumanPlayer(ui);
  } else if (player1SelectionType == 1) {
    player1 = new EasyComputerPlayer();
  }else {
    player1 = new HardComputerPlayer();
  }

  int player2SelectionType = ui.getSelectedPlayerType();
  Player player2;
  if (player2SelectionType == 0) {
    player2 = new HumanPlayer(ui);
  } else if (player2SelectionType == 1) {
    player2 = new EasyComputerPlayer();
  }else {
    player2 = new HardComputerPlayer();
  }
  return new Game(player1,player2, ui);

}

~~~~

You're probably saying, "Why don't you just pass the players into the create game method and do that somewhere else?". While that would clean up the `createGame()` method, the point is that mess of code would still have to end up _somewhere_. Now, after abstracting the code to a PlayerFactory, it's simple to see a massive improvement in readability, all while isolating all of that messy selection and creation logic in the `PlayerFactory`.

~~~~ java
public Game createGame(ui UI) {
  PlayerFactory factory = new PlayerFactory(ui);
  Player player1 = factory.getPlayer(ui.getSelectedPlayerType());
  Player player2 = factory.getPlayer(ui.getSelectedPlayerType());
  return new Game(player1,player2, ui);
}
~~~~

It's also important to note that adding a new player subclass becomes a much simpler task - making changes in solely the PlayerFactory and UI. The game doesn't need to know about exactly what type of `Player` it has, only that it has one at all.

Hopefully now that you know the What, When and Why of the factory pattern, you will be aware of exactly the right time and place to use it, and more importantly, when it's not necessary or could add more complexity to your code.
