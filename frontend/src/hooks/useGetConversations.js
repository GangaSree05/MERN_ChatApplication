import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// Use the deployed backend URL in production, and relative path in development
const API_BASE_URL = import.meta.env.PROD
	? "https://mern-chatapplication-1-962t.onrender.com"
	: "";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await fetch(`${API_BASE_URL}/api/users`, {
					credentials: "include"
				});
				const data = await res.json();
				if (data.error) {
					throw new Error(data.error);
				}
				setConversations(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getConversations();
	}, []);

	return { loading, conversations };
};
export default useGetConversations;
