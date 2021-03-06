import { Profile } from "../types/types";
import ApiHeader from "./Api";
import { authHeader } from "./auth.api";
import { SortAndFilter } from "../types/types";

export const getProfiles = async (
  filter: SortAndFilter, // by field: { isStared: true }
  sortBy: SortAndFilter // by field: { createdAt: -1 } (1 = ascending, -1 = descending)
): Promise<Profile[]> => {
  try {
    const { data } = await ApiHeader.post(
      "api/profile/profiles",
      {
        filter,
        sortBy,
      },
      authHeader()
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateProfile = async (
  profileUpdated: Profile
): Promise<Profile[]> => {
  try {
    return await ApiHeader.put(
      "api/profile/profile",
      profileUpdated,
      authHeader()
    );
  } catch (error) {
    console.log(error);

    throw error;
  }
};

export const deleteProfile = async (profileId: string): Promise<Profile[]> => {
  try {
    return await ApiHeader.delete(
      `api/profile/profile/${profileId}`,
      authHeader()
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
};
