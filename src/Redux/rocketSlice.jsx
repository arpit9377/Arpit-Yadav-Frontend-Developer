// rocketsSlice.jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error('Error fetching rockets data');
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    // Add your other reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default rocketsSlice.reducer;
