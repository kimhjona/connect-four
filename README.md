Connect Four using React

directions: https://gist.github.com/debrice/e0127d93d2361ea640e7ace795ab9629

1. Write functions and gameplay

- get_current_player(game_state) (who's turn is it?)
- is_state_valid(game_state)
- play(game_state, column, color "yellow" or "red")
- win

game_state = [
[None, None, None, None, None, None, None],
[None, None, None, None, None, None, None],
[None, None, "y", "r", None, None, None],
[None, None, "r", "y", None, None, None],
["r", "y", "y", "y", "r", "r", "y"],
["r", "r", "y", "y", "r", "y", "r"],
]

2. Build out a simple interface using React.js

The main goal is to write and organize code that is easy to understand.
