
//Response Types
type ResponseType = {
  code: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};
interface FetchServiceProps {
  method: string;
  endpoint: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any | FormData;
  headers?: Record<string, string>;
  auth?: boolean;
}

/**
 * Generic fetch service that handles different types of requests with authentication
 * @param _props - FetchServiceProps containing method, endpoint, data, and headers
 * @returns Promise<ResponseType>
 */

export const fetchService = async (
  _props: FetchServiceProps
): Promise<ResponseType> => {
  try {
    const token = localStorage.getItem("token");

    // Set headers conditionally based on _props.auth
    const baseHeaders: Record<string, string> = {
      ...(_props.headers || {}),
    };

    if (_props.auth && token) {
      baseHeaders["Authorization"] = `Bearer ${token}`;
    }

    const fetchOptions: RequestInit = {
      method: _props.method,
      headers: baseHeaders,
    };

    if (_props.data) {
      if (_props.data instanceof FormData) {
        delete baseHeaders["Content-Type"];
        fetchOptions.body = _props.data;
      } else {
        baseHeaders["Content-Type"] = "application/json";
        fetchOptions.body = JSON.stringify(_props.data);
      }
    }

    const response = await fetch(
      `${process.env.SERVER_URL}${_props.endpoint}`,
      fetchOptions
    );

    const data = await response.json();

    return {
      code: response.status,
      data,
    };
  } catch (error) {
    // console.error("Fetch service error:", error);
    return {
      code: 500,
      data: {
        status: "FAILED",
        error: "Request failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
    };
  }
};
