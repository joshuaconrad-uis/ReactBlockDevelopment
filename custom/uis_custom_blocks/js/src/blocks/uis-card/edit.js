import { useBlockProps, RichText, URLInputButton } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { styles } from './styles.js';
import { TextControl, Tooltip } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { headerText, title, content, linkUrl } = attributes;
  const blockProps = useBlockProps({
    className: 'card-grid-item',
  });

  return (
    <div {...blockProps} style={styles.card} className="advanced-card">
      <div className="advanced-card__header" style={styles.header}>
        <div className="advanced-card__header-text" style={styles.headerText}>
          {headerText}
        </div>
      </div>
      
      <div className="advanced-card__title-container">
        <RichText
          tagName="h2"
          className="advanced-card__title"
          value={title}
          onChange={(title) => setAttributes({ title })}
          placeholder={__('Card Title')}
          style={styles.title}
        />
      </div>
      
      <div className="advanced-card__content" style={styles.content}>
        <RichText
          tagName="div"
          className="advanced-card__paragraph"
          value={content}
          onChange={(content) => setAttributes({ content })}
          placeholder={__('Card content goes here...')}
          style={styles.paragraph}
        />
      </div>
      <div className="advanced-card__link-control" style={styles.linkControl}>
        <TextControl
          label={__('Card Link URL')}
          value={linkUrl}
          onChange={(linkUrl) => setAttributes({ linkUrl })}
          placeholder={__('https://example.com')}
        />
      </div>
    </div>
  );
}