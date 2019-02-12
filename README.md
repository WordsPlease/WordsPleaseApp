# Words Please!
Words Please is a speech tool for autistic children ages 3-7 learning to use words and sentences. It will build strong communication skills between children and parents, aides, and teachers.

Children will construct sentences using tiles with images and pictures on them, which will be read aloud at each new sentence. Some sentences, like

It is built for the Ipad with React Native. We will be using a Rails back-end with PostgresQL.



## Wireframes
![thankYouForWhoeverDidTheFormattingForMe](http://res.cloudinary.com/dqj3kgpoj/image/upload/v1524365654/wireframe.png)

## Functions:

* Main Features:
    * Cards to craft sentences and communicate
    * Setting switching
    * Connection with google translate audio (core to product but not necessarily to 1wk)
    * Very good pictures for word association

  
## Tech Stack
* React Native
* React/Redux
* Ruby on Rails
* Sqlite3
* Node
* Speech to text API


## Sample State:
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
    	 {
        Tile_id_3 :{
    			id : 3,
    			Image url:skopfk,
    			Title: ‘I feel”,
    			Is_end : false
        }
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
## Schema:
`settings`

| column name   |data type      | details |
| ------------- |:-------------:| -----:  |
| `id`            |  integer      | not null, primary key |
| `title`            |  string      | not null |
| `image_path`      |  string      | not null |


`starters`

| column name   |data type      | details |
| ------------- |:-------------:| -----:  |
| `id`            |  integer      | not null, primary key |
| `title`           |  string      | not null |
| `isLast`        | boolean    | not null |
| `img_path`  | string | not null, foreign key |



`middles`

| column name   |data type      | details |
| ------------- |:-------------:| -----:  |
| `id`            |  integer      | not null, primary key |
| `title`           |  string      | not null |
| `isLast`        | boolean    | not null |
| `img_path`  | string | not null |
| `start_id` | integer | not null, foreign key |

`finishers`

| column name   |data type      | details |
| ------------- |:-------------:| -----:  |
| `id`            |  integer      | not null, primary key |
| `title`           |  string      | not null |
| `isLast`        | boolean    | not null |
| `img_path`  | string | not null |
| `middle_id` | integer | not null, foreign key |

`setting_memberships`

| column name   |data type      | details |
| ------------- |:-------------:| -----:  |
| `id`            |  integer      | not null, primary key |
| `finisher_id` | integer | not null, foreign key |
| `setting_id` | integer | not null, foreign key |


