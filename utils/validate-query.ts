function checkQuery(query: string) {
  const trimmedQuery = query.trim().replace(/\s/g, "+");
  const regex = /^[a-zA-Z0-9\s]+$/;
  if (trimmedQuery.length < 3 || trimmedQuery.length > 100) {
    return false;
  }

  return true;
}

function trimQuery(query: string) {
  return query.trim().replace(/\s/g, "+");
}

export { checkQuery, trimQuery };
