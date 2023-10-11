import { useCallback, useMemo, useTransition } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useSearchParams = () => {
    const params = useMemo(() => {
        return new URLSearchParams(window && window.location.search);
    }, []);
    const location = useLocation();
    const navigate = useNavigate();
    const [, startTransition] = useTransition();

    const get = (key: string) => {
        return params.get(key);
    };

    const handle = useCallback(
        (key: string, value: string) => {
            if (value.length > 0) {
                params.set(key, value);
            } else {
                params.delete(key);
            }
            startTransition(() => {
                navigate({
                    pathname: location.pathname,
                    search: `?${params.toString()}`,
                });
            });
        },
        [location, navigate, params]
    );

    const remove = useCallback(
        (key: string) => {
            params.delete(key);
            startTransition(() => {
                navigate({
                    pathname: location.pathname,
                    search: `?${params.toString()}`,
                });
            });
        },
        [location, navigate, params]
    );

    const set = useCallback(
        (key: string, value: string) => {
            params.set(key, value);
            startTransition(() => {
                navigate({
                    pathname: location.pathname,
                    search: `?${params.toString()}`,
                });
            });
        },
        [location, navigate, params]
    );

    return { get, handle, remove, set };
};
