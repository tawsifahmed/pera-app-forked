export default function accessPermission(permission) {
    const rolePermission = useCookie('rolePermission').value;

    if (rolePermission.includes(permission)) {
      return true;
    } else {
      return false;
    }
  }