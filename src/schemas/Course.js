import PropTypes from 'prop-types';

const CourseSchema = PropTypes.shape({
  code: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  language: PropTypes.oneOf(['English', 'French', 'Bilingual/Unofficial/Unspecified']).isRequired,
  credits: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  extraDetails: PropTypes.arrayOf(PropTypes.string),
});

export default CourseSchema;
