/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

type State<T> = {
    [key in keyof T]: string;
}

type Update<T> = {
    param: keyof T;
    value: string;
}

interface Props<T> {
    needParams: (keyof T)[];
}

export function useCustomParams<T>({ needParams }: Props<T>) {
    const [ params, setParams ] = useState<State<T>>();
    const [ searchParams, setSearchParams ] = useSearchParams();
    
    useEffect(() => {
        const newParams = {} as State<T>;

        for (const p of needParams) {
            const param = searchParams.get(p as string);
            
            if (!param) continue;

            newParams![p] = param;
        }

        setParams(newParams);

    }, [searchParams])
    
    const updateParams = (needUpdate: Update<T>[]) => {
        const updateParams = {} as State<T>;

        for (const e of needUpdate) {
            updateParams[e.param] = e.value;
        }
        
        setSearchParams(() => {
            needUpdate.forEach((p) => {
                searchParams.set(p.param as string, p.value);
            })
            
            return searchParams;
        })
    
        setParams((prev) => ({
            ...prev,
            ...updateParams,
        }))
    }

    return {
        ...params,
        params,
        updateParams,
    }
}