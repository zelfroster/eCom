import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export function fetchCategoriesStart() {
  return createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);
}

export function fetchCategoriesSuccess(categoriesArray) {
  return createAction(
    CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray,
  );
}

export function fetchCategoriesFailed(error) {
  return createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
}
