'use client';
import css from '@/app/NotFound.module.css';
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => router.push('/'), 2000);
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className={css.wrapper}>
            <div className={css.card}>
                <h2 className={css.title}>Page not found</h2>
                <p className={css.description}> Sorry, the page you are looking for does not exist. </p>
            </div>
        </div>
    );
}

export default NotFound;