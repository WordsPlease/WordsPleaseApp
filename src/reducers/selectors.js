import values from 'lodash/values';

export const selectAllTiles = state => values(state.tiles);
export const selectSetting = state => values(state.setting)
