'use strict';

const fs = require('fs-extra');
const {join} = require('path');

const loadSqlQueries = async (folderName) => {
    const filePath = join(process.cwd(), 'data', folderName);
    const files = await fs.readdir(filePath);
    const sqlFiles = await files.filter(f => f.endsWith('.sql'));
    const queries = {};

    for (const sqlfiles of sqlFiles) {
        const query = await fs.readFileSync(join(filePath, sqlfiles), {encoding: "UTF-8"});
        queries[sqlfiles.replace(".sql", "")] = query
    }

    return queries;
}

module.exports = {
    loadSqlQueries
}