---
title: Pairing Tour Day 5
layout: post
date: 2016-11-11 09:00
tag:
- blog
- Apprenticeship
- Pairing Tour
- 8th Light
blog: true
---

# Pairing Tour Day 5

Today I paired with Rob, on a Java configuration file parser. We were having some problems with the XML parser reading '\n' newlines, as `#text` nodes. These configuration files don't have text nodes since they're full of self closing key value pair nodes, they look something like this `<myconfig key="someVal"/>`. At first, we would just check if it's a text node and return an empty JsonObject but that ended up with our resulting JSON looking a little crazy, like `"properties": [{"key": "someKey", "val": "someVal"}, {"key": "#text", "val": "{}"}]`, so that wasn't ideal at all. We ended up switching to a new method of filtering which resulted in it being clean! Then we had to write documentation for the parser and it's behavior. The parser ended up being a groovy build plug-in, that would be run every time the project was built and essentially compiled several different types of configuration files (.xml, .json, .properties) into a single `propertiesMetadeta.json` that the UI would be able to read and use to autocomplete override-able properties so that a simple typo wouldn't end up breaking the whole system like it currently does. The afternoon was spent at our quarterly mini-conference, with spotted monkey for lunch... Yum.
