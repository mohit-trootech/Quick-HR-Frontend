/**Review Provider */
import React, { useState, useContext } from "react";
import { GetRequest, PostRequest } from "../utils/AxiosRequest";
import { getBearerToken } from "../utils/utils";
import { BaseUrlPath } from "../utils/contants";
import {
  ReviewContext,
  PreloadContext,
  PaginationContext,
} from "../context/Contexts";
import { postReviewSuccess } from "../utils/handleResponses";
import { toast } from "react-toastify";
const ReviewProvider = ({ children }) => {
  const { updatePreloader } = useContext(PreloadContext);
  const { setPrevious, setNext, setCount } = useContext(PaginationContext);
  const [users, setUsers] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [recentReview, setRecentReview] = useState(null);
  // Get Users
  const getUsers = async (query_params) => {
    const response = await GetRequest(
      BaseUrlPath + "/accounts/user-list/" + query_params,
      getBearerToken
    );
    response && response.data.count && setUsers(response.data.results);
  };
  /*Post Review */
  const postReview = async (data) => {
    let id = toast.loading("Please Wait, Creating Review...");
    await PostRequest(
      BaseUrlPath + "/api/reviews/",
      data,
      getBearerToken,
      postReviewSuccess,
      id
    );
  };

  const getRecentReviews = async () => {
    const response = await GetRequest(
      `${BaseUrlPath}/api/reviews/recent_reviews/`,
      getBearerToken
    );
    response && setRecentReview(response.data);
  };

  /**Get All Reviews */
  const getAllReviews = async (query_params) => {
    const response = await GetRequest(
      `${BaseUrlPath}/api/reviews/${query_params || ""}`,
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    response && response.data.count && setReviews(response.data.results);
    response && setPrevious(response.data.previous);
    response && setNext(response.data.next);
    response && setCount(response.data.count);
  };

  const data = {
    getUsers,
    users,
    postReview,
    getAllReviews,
    reviews,
    recentReview,
    getRecentReviews,
  };
  return (
    <ReviewContext.Provider value={data}>{children}</ReviewContext.Provider>
  );
};
export default ReviewProvider;
