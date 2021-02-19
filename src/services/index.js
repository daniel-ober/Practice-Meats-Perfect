export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/slips?view=Grid%20view`;
// export const eventsURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/events?view=Grid%20view`;
// export const teamsURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/teams?view=Grid%20view`;
// export const judgesURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/judges?view=Grid%20view`;
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};
