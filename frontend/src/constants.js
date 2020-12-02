// ACTIONS
export const LOGIN_STARTED = "LOGIN_STARTED";
export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const UPDATE_ACS_STARTED = "UPDATE_ACS_STARTED";
export const UPDATE_ACS_FAILED = "UPDATE_ACS_FAILED";
export const UPDATE_ACS_SUCCEEDED = "UPDATE_ACS_SUCCEEDED";

export const SIGNUP_STARTED = "SIGNUP_STARTED";
export const SIGNUP_SUCCEEDED = "SIGNUP_SUCCEEDED";
export const SIGNUP_FAILED = "SIGNUP_FAILED";

export const FETCH_ACS_STARTED = "FETCH_ACS_STARTED";
export const FETCH_ACS_SUCCEEDED = "FETCH_ACS_SUCCEEDED";
export const FETCH_ACS_FAILED = "FETCH_ACS_FAILED";

export const FETCH_PROFILE_STARTED = "FETCH_PROFILE_STARTED ";
export const FETCH_PROFILE_SUCCEEDED = "FETCH_PROFILE_SUCCEEDED";

export const UPDATE_PROFILE_STARTED = "UPDATE_PROFILE_STARTED";
export const UPDATE_PROFILE_SUCCEEDED = "UPDATE_PROFILE_SUCCEEDED ";

export const FETCH_OC_POSTS_STARTED = "FETCH_OC_POSTS_STARTED";
export const FETCH_OC_POSTS_SUCCEEDED = "FETCH_OC_POSTS_SUCCEEDED";
export const FETCH_OC_POSTS_FAILED = "FETCH_OC_POSTS_FAILED";

export const FETCH_OC_USERS_STARTED = "FETCH_OC_USERS_STARTED";
export const FETCH_OC_USERS_SUCCEEDED = "FETCH_OC_USERS_SUCCEEDED";
export const FETCH_OC_USERS_FAILED = "FETCH_OC_USERS_FAILED";

export const USER_PROFILE_LINKS = [
  { name: "My Profile", link: "/profile" },
  { name: "User Profile", link: "/user-profile/" },
];

export const DELETE_OC_POST_STARTED = "DELETE_OC_POST_STARTED";
export const DELETE_OC_POST_SUCCEEDED = "DELETE_OC_POST_SUCCEEDED";
export const DELETE_OC_POST_FAILED = "DELETE_OC_POST_FAILED";

export const DELETE_OC_COMMENT_STARTED = "DELETE_OC_COMMENT_STARTED";
export const DELETE_OC_COMMENT_FAILED = "DELETE_OC_COMMENT_FAILED";
export const DELETE_OC_COMMENT_SUCCEEDED = "DELETE_OC_COMMENT_SUCCEEDED";

export const ADD_POST_STARTED = "ADD_POST_STARTED";
export const ADD_POST_SUCCEEDED = "ADD_POST_SUCCEEDED";
export const ADD_POST_FAILED = "ADD_POST_FAILED";

export const UPLOAD_PHOTO_STARTED = "UPLOAD_PHOTO_STARTED";
export const UPLOAD_PHOTO_SUCCEEDED = "UPLOAD_PHOTO_SUCCEEDED";

export const SET_BASE64_IMAGE_STARTED = "SET_BASE64_IMAGE_STARTED";
export const SET_BASE64_IMAGE_SUCCEEDED = "SET_BASE64_IMAGE_SUCCEEDED";
export const SET_BASE64_IMAGE_FAILED = "SET_BASE64_IMAGE_FAILED";

export const SET_PROFILE_PHOTO_STARTED = "SET_PROFILE_PHOTO_STARTED";
export const SET_PROFILE_PHOTO_SUCCEEDED = "SET_PROFILE_PHOTO_SUCCEEDED";
export const SET_PROFILE_PHOTO_FAILED = "SET_PROFILE_PHOTO_FAILED";

export const CLEAR_BASE64_IMAGE = "CLEAR_BASE64_IMAGE";

export const SET_CONTENT = "SET_CONTENT";

export const ADD_COMMENT_STARTED = "ADD_COMMENT_STARTED";
export const ADD_COMMENT_SUCCEEDED = "ADD_COMMENT_SUCCEEDED";
export const ADD_COMMENT_FAILED = "ADD_COMMENT_FAILED";

export const SET_COMMENT = "SET_COMMENT";

export const CLOSE_ERROR = "CLOSE_ERROR";
export const SHOW_ERROR = "SHOW_ERROR";

export const CLOSE_SUCCESS = "CLOSE_SUCCESS";
export const SHOW_SUCCESS = "SHOW_SUCCESS";

export const LOGOUT = "LOGOUT";

export const TRIGGER_CONFIRMATION_DIALOG = "TRIGGER_CONFIRMATION_DIALOG";
export const CLOSE_CONFIRMATION_DIALOG = "CLOSE_CONFIRMATION_DIALOG";

export const TOGGLE_AUTH_PAGE = "TOGGLE_AUTH_PAGE";

export const INIT_PHOTO_STARTED = "INIT_PHOTO_STARTED";
export const INIT_PHOTO_SUCCEEDED = "INIT_PHOTO_SUCCEEDED";

export const FETCH_PLAYERS_STARTED = "FETCH_PLAYERS_STARTED";
export const FETCH_PLAYERS_FAILED = "FETCH_PLAYERS_FAILED";
export const FETCH_PLAYERS_SUCCEEDED = "FETCH_PLAYERS_SUCCEEDED";

export const FETCH_DEBATES_STARTED = "FETCH_DEBATES_STARTED";
export const FETCH_DEBATES_FAILED = "FETCH_DEBATES_FAILED";
export const FETCH_DEBATES_SUCCEEDED = "FETCH_DEBATES_SUCCEEDED";

export const FETCH_RESPONSES_STARTED = "FETCH_RESPONSES_STARTED";
export const FETCH_RESPONSES_FAILED = "FETCH_RESPONSES_FAILED";
export const FETCH_RESPONSES_SUCCEEDED = "FETCH_RESPONSES_SUCCEEDED";

export const UPDATE_DAILY_PICKS = "UPDATE_DAILY_PICKS";

export const SEND_PREDICTS_SUCCEEDED = "SEND_PREDICTS_SUCCEEDED";
export const SEND_PREDICTS_STARTED = "SEND_PREDICTS_STARTED";
export const SEND_PREDICTS_FAILED = "SEND_PREDICTS_FAILED";

export const GET_PREDICTS_SUCCEEDED = "GET_PREDICTS_SUCCEEDED";
export const GET_PREDICTS_STARTED = "GET_PREDICTS_STARTED";
export const GET_PREDICTS_FAILED = "GET_PREDICTS_FAILED";

export const GET_WINNERS_STARTED = "GET_WINNERS_STARTED";
export const GET_WINNERS_SUCCEEDED = "GET_WINNERS_SUCCEEDED";
export const GET_WINNERS_FAILED = "GET_WINNERS_FAILED";

export const FETCH_GAME_SUCCEEDED = "FETCH_GAME_SUCCEEDED";
export const FETCH_GAME_STARTED = "FETCH_GAME_STARTED";
export const FETCH_GAME_FAILED = "FETCH_GAME_FAILED";

export const FETCH_DAILY_PICKS_SUCCEEDED = "FETCH_DAILY_PICKS_SUCCEEDED";
export const FETCH_DAILY_PICKS_STARTED = "FETCH_DAILY_PICKS_STARTED";
export const FETCH_DAILY_PICKS_FAILED = "FETCH_DAILY_PICKS_FAILED";

export const UPDATE_DAILY_PICKS_SUCCEEDED = "UPDATE_DAILY_PICKS_SUCCEEDED";
export const UPDATE_DAILY_PICKS_STARTED = "UPDATE_DAILY_PICKS_STARTED";
export const UPDATE_DAILY_PICKS_FAILED = "UPDATE_DAILY_PICKS_FAILED";

export const UPDATE_DEBATE_RESPONSE = "UPDATE_DEBATE_RESPONSE";
export const UPDATE_CURRENT_DEBATE = "UPDATE_CURRENT_DEBATE";

export const UPDATE_RETRIEVED_CUR_DEBATE = "UPDATE_RETRIEVED_CUR_DEBATE";
export const FETCH_ASSIGNED_RESPONSES_SUCCEEDED =
  "FETCH_ASSIGNED_RESPONSES_SUCCEEDED";
export const FETCH_ASSIGNED_RESPONSES_STARTED =
  "FETCH_ASSIGNED_RESPONSES_STARTED";
export const FETCH_ASSIGNED_RESPONSES_FAILED =
  "FETCH_ASSIGNED_RESPONSES_FAILED";

export const DEBATE_CHARACTER_LIMIT_MIN = 100;
export const DEBATE_CHARACTER_LIMIT_MAX = 500;

export const FETCH_SINGLE_RESPONSE_SUCCEEDED =
  "FETCH_SINGLE_RESPONSE_SUCCEEDED";
export const FETCH_SINGLE_RESPONSE_STARTED = "FETCH_SINGLE_RESPONSE_STARTED";
export const FETCH_SINGLE_RESPONSE_FAILED = "FETCH_SINGLE_RESPONSE_FAILED";

export const FETCH_SINGLE_DEBATE_SUCCEEDED = "FETCH_SINGLE_DEBATE_SUCCEEDED";
export const FETCH_SINGLE_DEBATE_STARTED = "FETCH_SINGLE_DEBATE_STARTED";
export const FETCH_SINGLE_DEBATE_FAILED = "FETCH_SINGLE_DEBATE_FAILED";

export const EVALUATE_DEBATE_STARTED = "EVALUATE_DEBATE_STARTED";
export const EVALUATE_DEBATE_SUCCEEDED = "EVALUATE_DEBATE_SUCCEEDED";

export const FETCH_ASSIGNED_RESPONSES_OBJECTS_STARTED =
  "FETCH_ASSIGNED_RESPONSES_OBJECTS_STARTED";
export const FETCH_ASSIGNED_RESPONSES_OBJECTS_SUCCEEDED =
  "FETCH_ASSIGNED_RESPONSES_OBJECTS_SUCCEEDED";
export const FETCH_ASSIGNED_RESPONSES_OBJECTS_FAILED =
  "FETCH_ASSIGNED_RESPONSES_OBJECTS_FAILED";

export const UPDATE_RESPONSE_STARTED = "UPDATE_RESPONSE_STARTED";
export const UPDATE_RESPONSE_SUCCEEDED = "UPDATE_RESPONSE_SUCCEEDED";
export const UPDATE_RESPONSE_FAILED = "UPDATE_RESPONSE_FAILED";

export const FETCH_TWO_ASSIGNED_RESPONSES_STARTED =
  "FETCH_TWO_ASSIGNED_RESPONSES_STARTED";

export const REMOVE_ASSIGNED_RESPONSES_SUCCEEDED =
  "REMOVE_ASSIGNED_RESPONSES_SUCCEEDED";
export const REMOVE_ASSIGNED_RESPONSES_STARTED =
  "REMOVE_ASSIGNED_RESPONSES_STARTED";
export const REMOVE_ASSIGNED_RESPPONSES_FAILED =
  "REMOVE_ASSIGNED_RESPPONSES_FAILED";

export const UPDATE_DATE = "UPDATE_DATE";
export const UPDATE_PICKS = "UPDATE_PICKS";

export const FETCH_COMPLETED_QUESTIONS_STARTED =
  "FETCH_COMPLETED_QUESTIONS_STARTED";
export const FETCH_COMPLETED_QUESTIONS_SUCCEEDED =
  "FETCH_COMPLETED_QUESTIONS_SUCCEEDED";
export const FETCH_TRIVIA_QUESTIONS_STARTED = "FETCH_TRIVIA_QUESTIONS_STARTED";
export const FETCH_TRIVIA_QUESTIONS_SUCCEEDED =
  "FETCH_TRIVIA_QUESTIONS_SUCCEEDED";
export const SET_TRIVIA_ANSWER = "SET_TRIVIA_ANSWER";

export const TRIVIA_STARTED = "TRIVIA_STARTED";
export const TRIVIA_ENDED = "TRIVIA_ENDED";

export const UPDATE_QUESTIONS_COMPLETED_STARTED =
  "UPDATE_QUESTIONS_COMPLETED_STARTED";
export const UPDATE_QUESTIONS_COMPLETED_SUCCEEDED =
  "UPDATE_QUESTIONS_COMPLETED_SUCCEEDED";

export const FETCH_BRACKETS_STARTED = "FETCH_BRACKETS_STARTED";
export const FETCH_BRACKETS_SUCCEEDED = "FETCH_BRACKETS_SUCCEEDED";
export const FETCH_BRACKETS_FAILED = "FETCH_BRACKETS_FAILED";

export const FETCH_PREV_DEBATE_STARTED = "FETCH_PREV_DEBATE_STARTED";
export const FETCH_PREV_DEBATE_SUCCEEDED = "FETCH_PREV_DEBATE_SUCCEEDED";

export const FETCH_USER_BRACKET_CHOICES_STARTED =
  "FETCH_USER_BRACKET_CHOICES_STARTED";
export const FETCH_USER_BRACKET_CHOICES_SUCCEEDED =
  "FETCH_USER_BRACKET_CHOICES_SUCCEEDED";

export const UPDATE_BRACKETS_STARTED = "UPDATE_BRACKETS_STARTED";
export const UPDATE_BRACKETS_SUCCEEDED = "UPDATE_BRACKETS_SUCCEEDED";
export const UPDATE_BRACKETS_FAILED = "UPDATE_BRACKETS_FAILED";

export const SET_BRACKET_UPDATE = "SET_BRACKET_UPDATE";

export const SET_SELECTED_TEAM = "SET_SELECTED_TEAM";
export const SET_SELECTED_SCORE = "SET_SELECTED_SCORE";

export const FETCH_USERS_HHTRIVIA_GAMES_STARTED =
  "FETCH_USERS_HHTRIVIA_GAMES_STARTED";
export const FETCH_USERS_HHTRIVIA_GAMES_SUCCEEDED =
  "FETCH_USERS_HHTRIVIA_GAMES_SUCCEEDED";

export const FETCH_HHTRIVIA_OPPONENTS_STARTED =
  "FETCH_HHTRIVIA_OPPONENTS_STARTED";
export const FETCH_HHTRIVIA_OPPONENTS_SUCCEEDED =
  "FETCH_HHTRIVIA_OPPONENTS_SUCCEEDED";

export const DELETE_HHTRIVIA_GAME_STARTED = "DELETE_HHTRIVIA_GAME_STARTED";
export const DELETE_HHTRIVIA_GAME_SUCCEEDED = "DELETE_HHTRIVIA_GAME_SUCCEEDED";
export const CREATE_HHTRIVIA_GAME_STARTED = "CREATE_HHTRIVIA_GAME_STARTED";
export const CREATE_HHTRIVIA_GAME_SUCCEEDED = "CREATE_HHTRIVIA_GAME_SUCCEEDED";
export const JOIN_HHTRIVIA_GAME_STARTED = "JOIN_HHTRIVIA_GAME_STARTED";
export const JOIN_HHTRIVIA_GAME_SUCCEEDED = "JOIN_HHTRIVIA_GAME_SUCCEEDED";
export const JOIN_HHTRIVIA_GAME_FAILED = "JOIN_HHTRIVIA_GAME_FAILED";
export const START_HHTRIVIA_GAME_STARTED = "START_HHTRIVIA_GAME_STARTED";
export const START_HHTRIVIA_GAME_SUCCEEDED = "START_HHTRIVIA_GAME_SUCCEEDED";
export const SET_HHTRIVIA_SELECTED_ANSWER = "SET_HHTRIVIA_SELECTED_ANSWER";
export const INCREMENT_HHTRIVIA_CUR_QUESTION =
  "INCREMENT_HHTRIVIA_CUR_QUESTION";
export const SET_HHTRIVIA_DEFAULT_PAGE = " SET_HHTRIVIA_DEFAULT_PAGE";
export const SET_HHTRIVIA_ACS_CHANGE = "SET_HHTRIVIA_ACS_CHANGE";
export const SET_HHTRIVIA_GAME_EVALUATED_SUCCEEDED =
  "SET_HHTRIVIA_GAME_EVALUATED_SUCCEEDED";
export const UPDATE_OTHER_ACS_STARTED = "UPDATE_OTHER_ACS_STARTED";
export const UPDATE_OTHER_ACS_SUCCEEDED = "UPDATE_OTHER_ACS_SUCCEEDED";
export const INCREMENT_HHTRIVIA_CORRECT_QUESTION =
  "INCREMENT_HHTRIVIA_CORRECT_QUESTION";
export const TOGGLE_HHTRIVIA_PAGE = "TOGGLE_HHTRIVIA_PAGE";
export const GET_TEAM_IMAGE_STARTED = "GET_TEAM_IMAGE_STARTED";
export const GET_TEAM_IMAGE_SUCCEEDED = "GET_TEAM_IMAGE_SUCCEEDED";

// Confirmation Dialog Messages
export const DELETE_POST = "Do you wish to delete this post?";
export const DELETE_POST_TITLE = "Delete Post?";
export const DELETE_COMMENT = "Do you wish to delete this comment?";
export const DELETE_COMMENT_TITLE = "Delete Comment?";

// API STATUS
export const UNINITIALIZED = "UNINITIALIZED";
export const STARTED = "STARTED";
export const SUCCEEDED = "SUCCEEDED";
export const FAILED = "FAILED";

//  MISC
export const EMPTY_FUNC = () => {};

// LocalStorage
export const USER_KEY = "user";
export const DEFAULT_CONFIRMATION_DIALOG = "Are you sure?";

// NAVBAR
export const NAV_ELEMENTS = [
  { name: "The Zone", link: "/thezone" },
  { name: "Debate", link: "/debate" },
];

export const MY_PROFILE_NAV_ELEMENT = [
  { name: "My Profile", link: "/profile" },
];

// Endpoints
export const API_ENDPOINT = "http://localhost:5000";

/**  ACS -- DO NOT CHANGE ORDER OF INITIALIZATION -- */
export const ACS_BREAKDOWN = {
  games: 0.1,
  analysis: 0.3,
  history: 0.1,
  pPP: 0.5,
};

export const EXPERT_ANALYST = "Expert Analyst";
export const PRO_ANALYST = "Pro Analyst";
export const ANALYST = "Analyst";
export const FANALYST = "Fanalyst";

export const MIN_ACS = 100;
export const MAX_ACS = 1100;

export const FANALYST_RANGE = {
  maxScore: 300,
  minScore: MIN_ACS,
  name: FANALYST,
};
export const ANALYST_RANGE = {
  maxScore: 600,
  minScore: FANALYST_RANGE.maxScore + 1,
  name: ANALYST,
};
export const PRO_ANALYST_RANGE = {
  maxScore: 900,
  minScore: ANALYST_RANGE.maxScore + 1,
  name: PRO_ANALYST,
};
export const EXPERT_ANALYST_RANGE = {
  maxScore: MAX_ACS,
  minScore: PRO_ANALYST_RANGE.maxScore + 1,
  name: EXPERT_ANALYST,
};

// All awards
export const AWARDS = [
  { award: "Most Valuable Player", key: "mvp" },
  { award: "Rookie of The Year", key: "rookieOTY" },
  { award: "Most Improved Player", key: "MIP" },
  { award: "Sixth-man Of the Year", key: "sixMan" },
  { award: "Defensive Player of the Year", key: "defensivePOTY" },
];

// Brackets
export const EAST_CONFERENCE_FIRST_MATCHES = [5, 6, 7, 8];
export const EAST_CONFERENCE_QUARTER_FINALS = [11, 12];
export const EAST_CONFERENCE_SEMI_FINALS = [14];
export const ALL_EAST_CONFERENCE_MATCHES = [
  ...EAST_CONFERENCE_FIRST_MATCHES,
  ...EAST_CONFERENCE_QUARTER_FINALS,
  ...EAST_CONFERENCE_SEMI_FINALS,
];
export const WEST_CONFERENCE_FIRST_MATCHES = [1, 2, 3, 4];
export const WEST_CONFERENCE_QUARTER_FINALS = [9, 10];
export const WEST_CONFERENCE_SEMI_FINALS = [13];
export const ALL_WEST_CONFERENCE_MATCHES = [
  ...EAST_CONFERENCE_FIRST_MATCHES,
  ...EAST_CONFERENCE_QUARTER_FINALS,
  ...EAST_CONFERENCE_SEMI_FINALS,
];
export const FINAL_MATCH = [15];
export const FIRST_MATCHES = [
  ...EAST_CONFERENCE_FIRST_MATCHES,
  ...WEST_CONFERENCE_FIRST_MATCHES,
];
export const ALL_MATCHES = [
  ...ALL_WEST_CONFERENCE_MATCHES,
  ...ALL_EAST_CONFERENCE_MATCHES,
  ...FINAL_MATCH,
];

export const SCORES = [0, 1, 2, 3, 4];

// Keys
export const ENTER = "Enter";
