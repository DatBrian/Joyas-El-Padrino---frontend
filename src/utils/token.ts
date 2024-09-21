export const isTokenExpired = (token: string) => {
  const tokenPayload = decodeToken(token);
  return Math.floor(new Date().getTime() / 1000) >= tokenPayload?.exp;
};

export const decodeToken = (token: string) => {
  const arrayToken = token.split(".");

  const tokenPayload = JSON.parse(atob(arrayToken[1]));
  return tokenPayload;
};
