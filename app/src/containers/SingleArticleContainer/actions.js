import * as types from './constants';
import 'whatwg-fetch';
// import fetch from 'isomorphic-fetch';
const baseUrl = 'https://udacity-alumni-api.herokuapp.com/';
const articleUrl = (id) => `${baseUrl}api/v1/articles/${id}`;

// singleArticledefaultAction :: None -> {Action}
export const singleArticleDefaultAction = () => ({
  type: types.SINGLEARTICLE_DEFAULT_ACTION,
});
// loadArticleInitiation :: None -> {Action}
export const loadArticleInitiation = (articleId) => ({
  type: types.ARTICLE_INITIATION,
  articleId,
});

// loadArticleSuccess :: JSON -> {Action}
export const loadArticleSuccess = (article) => ({
  type: types.ARTICLE_SUCCESS,
  article,
});

// loadArticleFailure :: Err -> {Action}
export const loadArticleFailure = (errors) => ({
  type: types.ARTICLE_FAILURE,
  errors,
});

export const loadArticle = (articleId) =>
  (dispatch) => {
    dispatch(
      loadArticleInitiation(articleId)
    );

    fetch(articleUrl(articleId))
      .then(res => res.json())
      .then(res => res.article)
      .then(article => {
        dispatch(
          loadArticleSuccess(article)
        );
      }).catch(error =>
        dispatch(
          loadArticleFailure([error])
        )
      );
  };
