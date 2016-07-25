import TrackList from './TrackList';
import {shallow} from 'enzyme';

describe('TrackList', () => {

  it('shows two tracks', () => {
    const props = {
      tracks: [{ id: 1, title: 'foo' }, { id: 2, title: 'bar' }]
    };
    const element = shallow(<TrackList {...props} />);

    expect(element.find('div > div')).to.have.length(2);
  });

  it('shows track title', () => {
    const props = {
      tracks: [{ id: 1, title: 'foo' }]
    }
    const element = shallow(<TrackList {...props} />);

    expect(element.contains('foo')).to.be.true;
  })

});
