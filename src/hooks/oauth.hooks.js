import { useGoogleLogin, useGoogleLogout } from "@leecheuk/react-google-login";


/**
 * @param {'login' | 'logout'} type 
 * @param {{onSuccess: (token: string) => void}} opts 
 */
export default function useOAuth(type, { onSuccess }) {
    const CLIENT_ID =
        "194151100205-eu9ajb3t9t7cunh5846k8scok0pn86q0.apps.googleusercontent.com";
    
    const { signIn } = useGoogleLogin({
        clientId: CLIENT_ID,
        prompt: 'select_account',
        onSuccess: (response) => onSuccess(response.tokenId),
    });
    
    const { signOut } = useGoogleLogout({
        clientId: CLIENT_ID,
        onLogoutSuccess: (_) => onSuccess("true"),
    });

    if (type === 'login')
        return {
            action: signIn,
        };

    return {
        action: signOut,
    };
}
