/**Review Provider */
import React, { useState } from "react";
import { GetRequest, PostRequest } from "../utils/AxiosRequest";
import { getBearerToken } from "../utils/utils";
import { BaseUrlPath } from "../utils/contants";
import { ReviewContext } from "../context/Contexts";
const ReviewProvider = ({ children }) => {
  const [users, setUsers] = useState();
  const [reviews, setReviews] = useState();
  // Get Users
  const getUsers = async (query_params) => {
    const response = await GetRequest(
      BaseUrlPath + "/accounts/user-list/" + query_params,
      getBearerToken
    );
  response && setUsers(response.data.results);
  };
  /*Post Review */
  const postReview = async (data) => {
    const response = await PostRequest(
      BaseUrlPath + "/api/reviews/",
      data,
      getBearerToken
    );
  response && console.log(response.data);
  };

  /**Get All Reviews */

  const getAllReviews = async (query_params) => {
    const response = await GetRequest(
      BaseUrlPath + "/api/reviews/" + query_params,
      getBearerToken
    );
    response.data.count > 0 && setReviews(response.data.results);
  };

  const data = {
    getUsers,
    users,
    postReview,
    getAllReviews,
    reviews,
  };
  return (
    <ReviewContext.Provider value={data}>{children}</ReviewContext.Provider>
  );
};
export default ReviewProvider;
