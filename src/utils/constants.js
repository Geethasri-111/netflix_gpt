export const logo_url = 'https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const user_avatar='https://occ-0-6641-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229';

export const api_options={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDBKEY,
    }
  }

export const poster_url = 'https://image.tmdb.org/t/p/w780';

export const SUPPORTED_LANG = [
  {identifier:'en',name:'English'},
  {identifier:'hindi',name:'Hindi'},
  {identifier:'es',name:'Spanish'}

];

export const openAIGptKey =process.env.REACT_APP_openAIGptKey;
// 