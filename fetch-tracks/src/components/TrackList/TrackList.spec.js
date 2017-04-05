import TrackList from './TrackList';
import Track from './Track';
import {shallow} from 'enzyme';

describe('TrackList', () => {

  it('shows two <Track /> component', () => {
    const props = {
      tracks: {
        tracks: [{ origin: { id: 1, title: 'foo' }}, { origin: { id: 2, title: 'bar' }}],
        activeTrack: null
      }
    };
    const element = shallow(<TrackList {...props} />);

    expect(element.find(Track)).to.have.length(2);
  });

});
