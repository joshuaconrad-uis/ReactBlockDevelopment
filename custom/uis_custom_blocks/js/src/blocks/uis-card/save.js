import { useBlockProps, RichText } from '@wordpress/block-editor';
import { styles } from './styles.js';

export default function Save({ attributes }) {
  const { headerText, title, content, linkUrl } = attributes;
  const blockProps = useBlockProps.save({
    className: 'card-grid-item',
  });

  // Create the card content
  const cardContent = (
    <div style={styles.card} className="advanced-card">
      <div className="advanced-card__header" style={styles.header}>
        <div className="advanced-card__header-text" style={styles.headerText}>
          {headerText}
        </div>
      </div>
      
      <div className="advanced-card__title-container">
        <RichText.Content
          tagName="h2"
          className="advanced-card__title"
          value={title}
          style={styles.title}
        />
      </div>
      
      <div className="advanced-card__content" style={styles.content}>
        <RichText.Content
          tagName="div"
          className="advanced-card__paragraph"
          value={content}
          style={styles.paragraph}
        />
      </div>
    </div>
  );

  // If there's a link URL, wrap the card in an anchor tag
  if (linkUrl) {
    return (
      <div {...blockProps}>
        <a href={linkUrl} className="advanced-card-link" style={styles.cardLink}>
          {cardContent}
        </a>
      </div>
    );
  }

  // Otherwise, just return the card
  return <div {...blockProps}>{cardContent}</div>;
}