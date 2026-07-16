'use client';

import { useNetworkStatus } from "@/lib/hooks/useNetworkStatus";

export default function NetworkStatusBanner() {
    const { isOnline, justReconnected } = useNetworkStatus();

    if (isOnline && !justReconnected) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 9999,
                padding: '8px 16px',
                textAlign: 'center',
                fontSize: 14,
                fontWeight: 500,
                color: '#fff',
                background: isOnline ? '#16a34a' : '#dc2626',
                transition: 'background 0.3s ease',
            }}
        >
            {isOnline ? 'Back online' : 'No internet connection'}
        </div>
    );
}