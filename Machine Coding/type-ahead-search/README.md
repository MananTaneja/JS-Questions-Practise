# Type Ahead Search bar

Pre-requisite: A backend API that supports search functionality

## Functional Requirements

1. Keyboard Navigation
2. Auto-complete search
3. Fetching results based on the search term
4. Highlight the search term

## Non-Functional Requirements

1. Responsive for all screen sizes
2. Accessibility - keyboard navigation
3. Performant rendering of the data items based on search
4. Offline support for already searched items

## High Level Design

1. Adding search terms state to the url

## Low Level Design

1. Search bar component
2. List component for search results - visibility listener
3. Row Component

## Performance

1. Debouncing the input change - limits the number of network calls being made
2. Cache the result of network calls - so that the repeated ones don't have to load
3. Paginating the results - loading only first 10 at a time and then incrementally loading others based on scroll
4. Start searching when atleast 3 letters have been typed
