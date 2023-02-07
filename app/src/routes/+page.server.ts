import type { PageServerLoad } from './$types.js';
import { Database } from 'lib/database';

export const load: PageServerLoad = async function ({ locals, url }) {
    const database = new Database();
    const user = database.getUser("123");

    return {
        user
    };
};