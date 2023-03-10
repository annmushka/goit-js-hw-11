'use strict';

import axios from 'axios';
export class PixabayAPI {
  static BASE_URL = 'https://pixabay.com/api/';
  static API_KEY = '33067692-1a5baf69be2ef609319513ff4';

  constructor() {
    this.page = 1;
    this.query = null;
    this.per_page = 40;
    this.countHits = this.per_page;
  }

  fetchPhotosByQuery() {
    const searchParams = {
      params: {
        q: this.query,
        page: this.page,
        per_page: this.per_page,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        key: PixabayAPI.API_KEY,
      },
    };

    return axios.get(PixabayAPI.BASE_URL, searchParams);
  }
}