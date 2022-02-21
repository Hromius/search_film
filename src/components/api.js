class Serwise {
  _baseApi = 'https://api.themoviedb.org';
  async getResourse(url) {
    const res = await fetch(`${this._baseApi}${url}`);

    if (!res.ok) {
      throw new Error('ошибка ' + res.status);
    }

    return await res.json();
  }
}

  export default Serwise