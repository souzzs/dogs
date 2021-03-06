// Retorna um objeto já configurado para ser eviado no fetch baseado na URL da api

export const URL_API = 'https://dogsapi.origamid.dev/json';

export function POST_TOKEN(body) {
  return {
    url: URL_API + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function POST_TOKEN_VALIDADO(token) {
  return {
    url: URL_API + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function GET_USER(token) {
  return {
    url: URL_API + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function POST_USER(body) {
  return {
    url: URL_API + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function POST_PHOT(formData) {
  return {
    url: URL_API + '/api/photo',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      body: formData,
    },
  };
}

export function GET_PHOTOS({ page, total, user }) {
  return {
    url: `${URL_API}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function GET_PHOTO(id) {
  return {
    url: `${URL_API}/api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function POST_COMMENT(id, body) {
  return {
    url: `${URL_API}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify(body),
    },
  };
}

export function DELETE_PHOTO(id) {
  return {
    url: `${URL_API}/api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}

export function LOST_PASSWORD(body) {
  return {
    url: URL_API + '/api/password/lost',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function RESET_PASSWORD(body) {
  return {
    url: URL_API + '/api/password/reset',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function GET_STATS() {
  return {
    url: URL_API + '/api/stats',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}
