# Course Comparator

A tool to display, filter, and bookmark courses.

Designed with the University of Ottawa’s courses in mind, it could work for any course data mapped to the correct schema. I work with the data generated by [my scraper/parser repo for Ottawa](lchski/uo-course-data), but you are welcome to adapt it to your own purposes. Drop the per-department data in [`public/data/`](public/data/) and the amalgamated data in [`src/data/`](src/data/).

For now, selection data are stored in localStorage, but that can be swapped out for something more permanent by tinkering with the codebase.

To run the project, clone it, then run `yarn install` followed by `yarn start`.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)—check out its documentation for more info.
