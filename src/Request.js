const key = '9d107d4813dc3bd9f2afaa908e7fd901'


const request = {
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=tr-TR&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=tr-TR&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=tr-TR&page=2`,
    requestUpComing:`
    https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=tr-TR&page=1`
    

}

export default request