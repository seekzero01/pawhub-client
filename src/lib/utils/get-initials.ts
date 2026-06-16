interface InitialsOptions {
    fallbackLimit?: number;
    fallbackString?: string;
}

export const getInitials = (
    name: string | null | undefined,
    options: InitialsOptions = {}
): string => {
    const { fallbackLimit = 2, fallbackString = '?' } = options;

    if (!name) {
        return fallbackString;
    }

    const parts = name.trim().split(/\s+/);

    if (parts.length === 0 || parts[0] === '') {
        return fallbackString;
    }

    if (parts.length === 1) {
        return parts[0].charAt(0).toUpperCase();
    }

    const firstInitial = parts[0].charAt(0);
    const lastInitial = parts[parts.length - 1].charAt(0);

    const initials = `${firstInitial}${lastInitial}`.toUpperCase();

    return initials.slice(0, fallbackLimit);
};