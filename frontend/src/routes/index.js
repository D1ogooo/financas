import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { AuthRouter } from "./AuthRoute";
import { NavigationContainer } from "@react-navigation/native";
import { UserRouter } from "./UserRoute";

export function Router() {
	// const { user } = useAuth();
	const [loading, setLoading] = useState(true);

    const user = true;


	useEffect(() => {
		const checkUser = () => {
			setLoading(false);
		};
		checkUser();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
	  <NavigationContainer>
       {user ? <UserRouter /> : <AuthRouter />}
      </NavigationContainer>
	);
}