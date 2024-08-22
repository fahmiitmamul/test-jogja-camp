// src/features/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Province, Regency, District, Village } from "@/types/address";

interface addressState {
  provinceId: string;
  regencyId: string;
  districtId: string;
  villageId: string;
  provinceData: Province[];
  regencyData: Regency[];
  districtData: District[];
  villageData: Village[];
}

const initialState: addressState = {
  provinceId: "",
  regencyId: "",
  districtId: "",
  villageId: "",
  provinceData: [],
  regencyData: [],
  districtData: [],
  villageData: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setProvinceId: (state, action: PayloadAction<string>) => {
      state.provinceId = action.payload;
    },
    setRegencyId: (state, action: PayloadAction<string>) => {
      state.regencyId = action.payload;
    },
    setDistrictId: (state, action: PayloadAction<string>) => {
      state.districtId = action.payload;
    },
    setVillageId: (state, action: PayloadAction<string>) => {
      state.villageId = action.payload;
    },
    setProvinceData: (state, action: PayloadAction<Province[]>) => {
      state.provinceData = action.payload;
    },
    setRegencyData: (state, action: PayloadAction<Regency[]>) => {
      state.regencyData = action.payload;
    },
    setDistrictData: (state, action: PayloadAction<District[]>) => {
      state.districtData = action.payload;
    },
    setVillageData: (state, action: PayloadAction<Village[]>) => {
      state.villageData = action.payload;
    },
  },
});

export const {
  setProvinceId,
  setRegencyId,
  setDistrictId,
  setVillageId,
  setProvinceData,
  setRegencyData,
  setDistrictData,
  setVillageData,
} = counterSlice.actions;
export default counterSlice.reducer;
