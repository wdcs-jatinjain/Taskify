import crypto from 'crypto';

export function generateRecoveryCode(): string {
    return crypto.randomBytes(6).toString('hex');
} 