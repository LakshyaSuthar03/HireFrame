import connection from "../database/connection.js";
const job = async (req, res) => {
  try {
    const {
      layouts_id,
      title,
      description,
      requirements,
      location,
      salary_range,
      experience_range,
    } = req.body;
    const user_id = req.user.id;
    const query = `INSERT INTO jobs (layouts_id, user_id, title, description, requirements, location, salary_range, experience_range) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    connection.query(
      query,
      [
        layouts_id,
        user_id,
        title,
        description,
        requirements,
        location,
        salary_range,
        experience_range,
      ],
      (err, result) => {
        if (err) {
          res.status(400).json({ message: err?.message });
        } else {
          res.status(201).json({ message: "Job posted successfully" });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getJobs = async (req, res) => {
  try {
    const { layouts_id } = req.body;
    const query = `SELECT * FROM jobs WHERE layouts_id = ?`;
    connection.query(query, [layouts_id], (err, result) => {
      if (err) {
        res.status(400).json({ message: err?.message });
      } else {
        res.status(200).json(result);
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { job, getJobs };
