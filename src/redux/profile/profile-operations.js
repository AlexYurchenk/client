import axios from "axios";
import {
  fetchProfilesRequest,
  fetchProfilesSuccess,
  fetchProfilesError,
  addProfileRequest,
  addProfileSuccess,
  addProfileError,
  deleteProfileRequest,
  deleteProfileSuccess,
  deleteProfileError,
} from "./profile-actions";
import { toast } from "react-toastify";

export const fetchProfile = () => (dispatch) => {
  dispatch(fetchProfilesRequest());

  axios
    .get("/profile/get")
    .then(({ data }) => dispatch(fetchProfilesSuccess(data)))
    .catch((error) => {
      dispatch(fetchProfilesError(error));

      if (error.response.status === 404) {
        toast.info("There is no such user's collection!");
      } else if (error.response.status === 500) {
        toast.error("Oops! Server error! Please try later!");
      } else {
        toast.error("Something went wrong! Please reload the page!");
      }
    });
};

export const addProfile = (name, city, value) => (dispatch) => {
  const profile = {
    name,
    city,
    gander: value,
  };

  dispatch(addProfileRequest());

  axios
    .post("/profile/post", profile)
    .then(({ data }) => {
      return dispatch(addProfileSuccess(data));
    })
    .catch((error) => {
      dispatch(addProfileError(error));

      if (error.response.status === 400) {
        toast.error("Profile creation error!");
      } else {
        toast.error("Something went wrong! Please reload the page!");
      }
    });
};

export const deleteProfile = (profileId) => (dispatch) => {
  dispatch(deleteProfileRequest());

  axios
    .delete(`/profile/delete/${profileId}`)
    .then(() => dispatch(deleteProfileSuccess(profileId)))
    .catch((error) => {
      dispatch(deleteProfileError(error));

      if (error.response.status === 404) {
        toast.info("There is no such user's collection!");
      } else if (error.response.status === 500) {
        toast.error("Oops! Server error! Please try later!");
      } else {
        toast.error("Something went wrong! Please reload the page!");
      }
    });
};
