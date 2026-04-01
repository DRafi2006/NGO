import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, LogOut } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';

export default function UserNotRegisteredError() {
    const { logout } = useAuth();

    return (
        <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full bg-card shadow-xl border border-border rounded-3xl p-8 text-center"
            >
                <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldAlert className="w-10 h-10 text-destructive" />
                </div>
                <h1 className="font-playfair text-3xl font-bold mb-3 text-foreground">Access Denied</h1>
                <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                    It looks like your account is not registered to access this application. Please contact the administrator or try logging in with an authorized account.
                </p>
                <button
                    onClick={() => logout(true)}
                    className="flex items-center justify-center gap-2 w-full bg-foreground text-background py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                    <LogOut className="w-4 h-4" /> Sign Out & Try Alternative Account
                </button>
            </motion.div>
        </div>
    );
}
