import React from "react";
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://picsum.photos/id/1/536/400",
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: "jackets",
          imageUrl: "https://picsum.photos/id/2/536/400",
          id: 1,
          linkUrl: ''
        },
        {
          title: "sneakers",
          imageUrl: "https://picsum.photos/id/3/536/400",
          id: 1,
          linkUrl: ''
        },
        {
          title: "womens",
          imageUrl: "https://picsum.photos/id/4/536/400",
          size: 'large',
          id: 1,
          linkUrl: ''
        },
        {
          title: "mens",
          imageUrl: "https://picsum.photos/id/5/536/400",
          size: 'large',
          id: 1,
          linkUrl: ''
        }
      ],
    };
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;