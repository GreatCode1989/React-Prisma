const { prisma } = require("../prisma/prisma-client");

// /api/employees

const all = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();

    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({
      message: "Не удалось получить сотрудников",
    });
  }
};

// /api/employees/add

const add = async (req, res) => {
  try {
    const data = req.body;

    if (!data.firstName || !data.lastName || !data.adress || !data.age) {
      return res.status(400).json({
        message: "Все поля обязательные",
      });
    }

    const employee = await prisma.employee.create({
      data: {
        ...data,
        userId: req.user.id,
      },
    });

    return res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

// /api/employees/remove/:id

const remove = async (req, res) => {
  const { id } = req.body;

  try {
    await prisma.employee.delete({
      where: {
        id,
      },
    });

    res.status(204).json("OK");
  } catch (err) {
    res.status(500).json({
      message: "Не удалось удалить сотрудника",
    });
  }
};

// /api/employees/edit/:id

module.exports = {
  all,
  add,
  remove
};
