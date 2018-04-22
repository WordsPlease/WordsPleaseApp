# Words Please!
Words Please is a speech tool for autistic children ages 3-7 learning to use words and sentences. It will build strong communication skills between children and parents, aides, and teachers.

Children will construct sentences using tiles with images and pictures on them, which will be read aloud at each new sentence. Some sentences, like

It is built for the Ipad with React Native. We will be using a Rails back-end with PostgresQL.

## MVP Features
   * Setting: Classroom
   * Sentence Builder UI
      * Word Tiles
         * Tree-like structure
         * 3 parts maximum
         * Intuitive Picture Representation
   * Sentence Display
         * Active tiles
         * Sentence In progress
   * Button to reset
      * tap to go back
      * hold to reset
   * Pictures
   * Tutorial
   * seed data
      * settings
      * starters
      * verbs/middles
      * enders
   * speech
      * read sentence aloud every time tile is selected
      * read sentence aloud on sentence tap/press

## Wireframes
![Tiffany will upload this]()

## Functions:

* Main Features:
    * Cards to craft sentences and communicate
    * Setting switching
    * Connection with google translate audio (core to product but not necessarily to 1wk)
    * Very good pictures for word association

  * BONUS:
    * (Parent)
      * Local password (to allow for user context switching)
      * Routine (child swipes as they complete steps)
      * Timer (for adult to set and establish routine and time block)
      * Adding local vocab/cards for parents
      * Local storage for customized libraries
      * Different age contexts/settings (upper age can include courtesy words)
      * Spammed button -> Disable option for X seconds (prevent whining/spamming)
* UX features (still core):
    * Card/Word scrolling
    * Backspace/Reset Button

## Tech Stack
* React Native
* React/Redux
* Ruby on Rails
* Sqlite3
* Node
* Speech to text API

## Implementation Timeline

### 4/21 - 4/22 Weekend
* HELLO WORLD ON PHONES BY MONDAY
* Proposal
   * Wireframe
   * React native components
   * State Shape
   * Schema

### 4/23 Monday(pair program)
* Set up database/models/controllers
* Minimal seeding
* Build container & entry files, figure out if any additional bundler needed
* settings component
* Live wireframe tutorial (pics only of workflow)

### 4/24 Tuesday(pair program)
* Build starter
   * component
   * action
   * reducer
   * api util
   * view/json
   * style/stylesheet

### 4/25 Wednesday(split up parts)
* Add error handling(reducer?)
* build out other components, actions etc.

### 4/25 Thursday
* manage assets and local storage
* implement speech capabilities

### 4/26 Friday
* manage styling & stylesheets
* continue Thursday’s work
* build out tutorial page

### 4/27 Saturday
* build tutorial page

### 4/28 Sunday


Challenges
How to organize data structures to relate to each other yet be easy to create

Text specs
Words need boolean marking if end of thought so frontend knows to render restart button


Sample State:
```
{
	Entities: {
		ActiveTiles: {
			0: Starter: {
id: 1,
title: ‘’,
imgUrl: ‘oajsdi’
}
			1: Middle: 1,
},
Tiles: {
	[
		{Tile_id_0 :{
			Id: 0,
			image url:sdfsd,
			Title: “I want”,
			Is_end : false},
	{Tile_id_3 :{
			id : 3,
			Image url:skopfk,
			Title: ‘I feel”,
			Is_end : false}
]
	},

}
		Setting: {
			1: {
			Setting_id: 1,
			ImagePath: ./documents?
			}
},
},
	Errors: {},
	Parent-Mode: {Off},
	Connectivity: Offline (Figure out later-- depends on what to do for speech-to-text)
}
```
Schema:
`Setting`

| column name   |data type      | details |
| ------------- |:-------------:| -----:  |
| `id`            |  integer      | not null, primary key |
| `title`            |  string      | not null |
| `image_path`      |  string      | not null |


`Start`

| column name   |data type      | details |
| ------------- |:-------------:| -----:  |
| `id`            |  integer      | not null, primary key |
| `title`           |  string      | not null |
| `isLast`        | boolean    | not null |
| `img_path`  | string | not null, foreign key |



`Middle`

| column name   |data type      | details |
| ------------- |:-------------:| -----:  |
| `id`            |  integer      | not null, primary key |
| `title`           |  string      | not null |
| `isLast`        | boolean    | not null |
| `img_path`  | string | not null |
| `start_id` | integer | not null, foreign key |

`finisher`

| column name   |data type      | details |
| ------------- |:-------------:| -----:  |
| `id`            |  integer      | not null, primary key |
| `title`           |  string      | not null |
| `isLast`        | boolean    | not null |
| `img_path`  | string | not null |
| `middle_id` | integer | not null, foreign key |



Rolling list of questions:

iOS native speech to text library/tool for apps
Offline alternative for speech
Confirming offline storage/cache for app
Emulating/testing app


Resources:


Working notes of things to build:
Tables/Models/controllers
Seed data
Views for json objects - Do we send to backend on web or local on phone?
---
Entry file
* how does it compile?
* Other files needed?
Components/Containers
   * Container: main page
   * setting component
   * sentence display
      * still displays selected tiles (even if previous fragment no longer shows in index items)
   * tile display grid/array
   * tile items
Actions and api calls
### Setting
* get setting
### Starter(s)
* get all starters
* get active starter
### Middle
* get all middles
* get active middle
### End
* get all ends
* get active end
### Sentence display
* get speech
* delete starter (within sentence)
* delete middle (within sentence)
* delete end (within sentence)

Reducers
React native stylesheets

Assets! Pictures and Imaging
Tutorial
