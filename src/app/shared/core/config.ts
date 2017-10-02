import { USER_LOGGED } from "../../store/user/user.actions";

export function config(ngRedux, authService) {
    if (authService.isAuthenticated) {
        const token = authService.getToken();
        const username = authService.getUser();


        ngRedux.dispatch({
            type: USER_LOGGED,
            result: {
                success: true,
                token: token,
                user: {
                    name: username
                }
            }
        })
    }
} 