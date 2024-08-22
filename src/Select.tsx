import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios, { AxiosResponse } from "axios";
import { useCallback, useEffect } from "react";
import { RootState, AppDispatch } from "./store";
import { useSelector, useDispatch } from "react-redux";
import {
  setProvinceId,
  setRegencyId,
  setDistrictId,
  setVillageId,
  setProvinceData,
  setRegencyData,
  setDistrictData,
  setVillageData,
} from "./features/addressSlice";
import { Province, Regency, District, Village } from "./types/address";

const SelectComponent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const provinceId = useSelector(
    (state: RootState) => state.address.provinceId
  );
  const regencyId = useSelector((state: RootState) => state.address.regencyId);
  const districtId = useSelector(
    (state: RootState) => state.address.districtId
  );
  const villageId = useSelector((state: RootState) => state.address.villageId);
  const provinceData: Province[] = useSelector(
    (state: RootState) => state.address.provinceData
  );
  const regencyData: Regency[] = useSelector(
    (state: RootState) => state.address.regencyData
  );
  const districtData: District[] = useSelector(
    (state: RootState) => state.address.districtData
  );
  const villageData: Village[] = useSelector(
    (state: RootState) => state.address.villageData
  );

  const fetchProvinces = useCallback(async (): Promise<void> => {
    try {
      const response: AxiosResponse<Province[]> = await axios.get<Province[]>(
        `http://apikab.jcamp.pt/public/api/v1/reference/provinces`
      );

      if (response) {
        dispatch(setProvinceData(response.data));
      } else {
        dispatch(setProvinceData([]));
      }
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  }, [dispatch]);

  const fetchRegency = useCallback(async (): Promise<void> => {
    try {
      const response: AxiosResponse<Regency[]> = await axios.get<Regency[]>(
        `http://apikab.jcamp.pt/public/api/v1/reference/regencies_of/${provinceId}`
      );

      dispatch(setRegencyData(response.data));
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  }, [provinceId, dispatch]);

  const fetchDistrict = useCallback(async (): Promise<void> => {
    try {
      const response: AxiosResponse<District[]> = await axios.get<District[]>(
        `http://apikab.jcamp.pt/public/api/v1/reference/districts_of/${regencyId}`
      );

      dispatch(setDistrictData(response.data));
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  }, [regencyId, dispatch]);

  const fetchVillage = useCallback(async (): Promise<void> => {
    try {
      const response: AxiosResponse<Village[]> = await axios.get<Village[]>(
        `http://apikab.jcamp.pt/public/api/v1/reference/villages_of/${districtId}`
      );

      dispatch(setVillageData(response.data));
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  }, [districtId, dispatch]);

  useEffect(() => {
    fetchProvinces();
  }, [fetchProvinces]);

  useEffect(() => {
    fetchRegency();
  }, [provinceId, fetchRegency]);

  useEffect(() => {
    fetchDistrict();
  }, [regencyId, fetchDistrict]);

  useEffect(() => {
    fetchVillage();
  }, [districtId, villageId, fetchVillage]);

  return (
    <div className="max-w-5xl mx-auto my-5 w-full px-10">
      <div className="grid gap-4 mx-10">
        <div className="flex w-full">
          <div className="text-3xl font-bold">Frontend.</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <div className="flex flex-col w-full md:w-[50%]">
          <div className="flex flex-col gap-5">
            <div className="text-md font-bold">Filter</div>
            <div className="flex">
              <div className="w-full flex flex-col gap-5">
                <div>
                  <div className="text-sm font-bold mb-2">Provinsi</div>
                  <Select
                    onValueChange={(value) => {
                      dispatch(setProvinceId(value));
                    }}
                    value={provinceId}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Silahkan Pilih" />
                    </SelectTrigger>
                    <SelectContent>
                      {provinceData.map((province) => (
                        <SelectItem
                          value={province.id.toString()}
                          key={province.id}
                        >
                          {province.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <div className="text-sm font-bold mb-2">Kabupaten</div>
                  <Select
                    onValueChange={(value) => {
                      dispatch(setRegencyId(value));
                    }}
                    value={regencyId}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Silahkan Pilih" />
                    </SelectTrigger>
                    <SelectContent>
                      {regencyData.map((regency) => (
                        <SelectItem
                          value={regency.id.toString()}
                          key={regency.id}
                        >
                          {regency.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <div className="text-sm font-bold mb-2">Kecamatan</div>
                  <Select
                    onValueChange={(value) => {
                      dispatch(setDistrictId(value));
                    }}
                    value={districtId}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Silahkan Pilih" />
                    </SelectTrigger>
                    <SelectContent>
                      {districtData.map((district) => (
                        <SelectItem
                          value={district.id.toString()}
                          key={district.id}
                        >
                          {district.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <div className="text-sm font-bold mb-2">Desa</div>
                  <Select
                    onValueChange={(value) => {
                      dispatch(setVillageId(value));
                    }}
                    value={villageId}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Silahkan Pilih" />
                    </SelectTrigger>
                    <SelectContent>
                      {villageData.map((village) => (
                        <SelectItem
                          value={village.id.toString()}
                          key={village.id}
                        >
                          {village.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <Card className="w-full border border-gray-300">
            <CardHeader className="flex flex-col gap-2">
              <CardTitle className="text-md">Frontend</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
              <CardDescription className="text-xs font-bold">
                Last updated 5 mins ago
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full border border-gray-300">
            <CardHeader className="flex flex-col gap-2">
              <CardTitle className="text-md">Mockup</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
              <CardDescription className="text-xs font-bold">
                Last updated 5 mins ago
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full border border-gray-300">
            <CardHeader className="flex flex-col gap-2">
              <CardTitle className="text-md">Design</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
              <CardDescription className="text-xs font-bold">
                Last updated 5 mins ago
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full border border-gray-300">
            <CardHeader className="flex flex-col gap-2">
              <CardTitle className="text-md">Test</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
              <CardDescription className="text-xs font-bold">
                Last updated 5 mins ago
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default SelectComponent;
