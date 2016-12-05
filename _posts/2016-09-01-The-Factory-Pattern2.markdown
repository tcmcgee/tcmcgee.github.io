---                          
title: The Factory Pattern
layout: post         
date: 2016-09-01 09:00                         
tag:                             
- blog                        
- Programming Patterns
- 8th Light
blog: true                            
---

# The Factory Pattern

Design patterns help to simplify and abstract your code, the challenge comes in knowing the correct pattern for the job.
In any code base it's important not to add extraneous design patterns since a lot of patterns come along with a foundation that requires a fair amount of boilerplate code, so it is important to know the exact circumstances when a specific pattern is appropriate. One of the most common patterns in object orientated programming is the factory pattern, and there's definitely a right and wrong time to use it. I will walk you through some examples of the different ways the factory pattern appears in the wild, times it's used well and poorly, and touch on situations where you should think about bringing the pattern into your projects.

## What?

![IMAGE OF FACTORY](http://www.tomcmcgee.me/assets/images/factory.jpg)

At the highest level a basic factory pattern functions similar to an actual factory. The raw materials, or parameters, are given to the factory and the finished good, a constructed object, is returned. With a more pragmatic focus, a factory pattern takes parameters and returns an object that satisfies an interface. Usually the factory is named after the interface it satisfies, for example a factory that produces objects that implement `Animal` would be called a `AnimalFactory`. Here is some quick context on the simplest scenario where you might want to use a Factory, as well as the actual factories implementation.

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

## When?

So it's immediately apparent by the above example that there's a lot of different kinds of Animals, now assuming your adhering to the [Liskov substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle), each of these animals should be interchangeable in your program. If that's true and the type of object, in this case an animal, that you're going to want depends let's say on a survey asking how much time someone has to take care of their next pet, how responsible they are, or even whether they're a dog or cat person.

Now if you decide to switch to a factory, and notice things like this:

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

That may be a sign that a factory isn't a good fit in your project. Factories are best utilized when the behavior remains the save through all Sub-Types of the factory type.

One of the most frequent occurrences of factories in the wild I see is in a simple implementation of tic-tac-toe. The user wants to allow for several types of players, human, easy computers, and hard computers, but the exact type of computer being created depends on the user's input. A `PlayerFactory` is appropriate here because once the players are created they each satisfy the `Player` interface, which simply contains `int getMove()`. The use of a factory in this scenario allows a player to create a game containing any combination of players they want, and removes that messy series of `if`/`else` statements from the main, where they could seriously cloud what's going on.

The factory pattern can definitely be a powerful tool when used in the correct circumstances, the true power comes after you verify it's a good fit in your design. In review of some of the key points before using this pattern:

* You're using a class based programming language.
* Your code depends on abstractions (the Animal interface in the example code above).
* There's enough variety in the number of classes, or when each one should be used.
* You don't need to do specific type checking down the line (the `makeHappy` example), as that pretty much defeats the purpose of this pattern.

## Why?

How every object is created is admittedly a lot of knowledge, especially to tangle into another class. The factory pattern allows a simple call `PlayerFactory.getPlayer("Computer")`, to dynamically generate exactly what you need, when you need it. Reflect on the following:

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

You're probably saying, "Why don't you just pass the players into the create game method and do that somewhere else?" and yes that would clean up the `createGame()` method, but the point is that mess of code would still have to end up _somewhere_. Now after abstracting the code to a PlayerFactory, it's simple to see a massive improvement in readability.

~~~~ java
public Game createGame(ui UI) {
  PlayerBuilder builder = new PlayerBuilder(ui);
  Player player1 = builder.getPlayer(ui.getSelectedPlayerType());
  Player player2 = builder.getPlayer(ui.getSelectedPlayerType());
  return new Game(player1,player2, ui);
}
~~~~

It's also important to note that adding a new player subclass becomes a much simpler task, just making changes in the PlayerFactory and UI. The game doesn't need to know about exactly what type of `Player` it has, simply that it has one at all.

Hopefully now that you know the What, When and Why of the factory pattern you will be aware of exactly the right time and place to use it and more importantly when it's not necessary or could add more complexity to your code.
