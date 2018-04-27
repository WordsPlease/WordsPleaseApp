import values from 'lodash/values';

const selectAllTiles = state => values(state.tiles);

export default selectAllTiles
