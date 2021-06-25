
import PropTypes from 'prop-types';
import style from './Statistics.module.css';



const generateColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

function Statistics({ title = ' ', stats }) {
  return (
    <section className={style.statistics}>
     {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statList}>
        {stats.map(item => (
          <li key={item.id} className={style.item} style={{ backgroundColor: generateColor()}}>
            <span className={style.label}>{item.label}</span>
            <span className={style.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage:PropTypes.number,
    }),
  ),
};

export default Statistics;