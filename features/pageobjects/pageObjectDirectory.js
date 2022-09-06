import loginPage from './login/loginPage.object'
import gamesPage from './games/gamesPage.object'
import favoritePage from './favorite/favoritePage.object'


const login = new loginPage()
const games = new gamesPage()
const favorite = new favoritePage()

export {default as loginPage} from './login/loginPage.object'
export {default as gamesPage} from './games/gamesPage.object'
export {default as favoritePage} from './favorite/favoritePage.object'

export default {
  login,
  games,
  favorite,
}
