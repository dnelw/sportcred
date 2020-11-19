import {
  FETCH_COMPLETED_QUESTIONS_SUCCEEDED,
  FETCH_TRIVIA_QUESTIONS_SUCCEEDED,
  SET_TRIVIA_ANSWER,
  UPDATE_QUESTIONS_COMPLETED_SUCCEEDED,
} from "../constants";
import { Map } from "immutable";

const initState = Map({
  questionsCompleted: 0,
  questions: [],
  fetchTriviaQuestionsCompleted: false,
  fetchCompletedQuestionsCompleted: false,
  selectedAnswer: "",
});

export const trivia = (state = initState, action) => {
  switch (action.type) {
    case FETCH_COMPLETED_QUESTIONS_SUCCEEDED:
      return state
        .set("questionsCompleted", action.questionsCompleted)
        .set("fetchCompletedQuestionsCompleted", true);
    case FETCH_TRIVIA_QUESTIONS_SUCCEEDED:
      return state
        .set("questions", action.questions)
        .set("fetchTriviaQuestionsCompleted", true);
    case SET_TRIVIA_ANSWER:
      return state.set("selectedAnswer", action.selectedAnswer);
    case UPDATE_QUESTIONS_COMPLETED_SUCCEEDED:
      return state.set(
        "questionsCompleted",
        state.get("questionsCompleted") + 1
      );
    default:
      return state;
  }
};
